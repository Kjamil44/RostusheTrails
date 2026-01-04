'use client';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Container,
  useMediaQuery,
  useTheme,
  Popover,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import Link from 'next/link';
import logoPic from '../../../assets/images/logo.jpg';
import { Locale, usePathname, useRouter } from '../../../../i18n/routing';
import { useTranslations } from 'next-intl';
import { useMemo, useState } from 'react';
import LanguagePicker from './LanguagePicker';

export default function Header({
  locale,
  params,
}: {
  locale: string;
  params: { locale: Locale };
}) {
  const t = useTranslations('menu');
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [trailsAnchor, setTrailsAnchor] = useState<HTMLElement | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileTrailsOpen, setMobileTrailsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(
      // @ts-expect-error next-intl routing typing
      { pathname, params },
      { locale: newLocale as Locale }
    );
  };

  const pages = useMemo(
    () => [
      { label: t('home'), href: '' },
      { label: t('about-us'), href: 'about-us' },
      { label: t('accommodation'), href: 'accommodation' },
      { label: t('sponsors'), href: 'sponsors' },
      { label: t('contact'), href: 'contact' },
      { label: t('gallery'), href: 'gallery' },
    ],
    [t]
  );

  const trailPages = useMemo(
    () => [
      { label: t('11km'), href: 'trails/eleven-km' },
      { label: t('27Km'), href: 'trails/twentyseven-km' },
      { label: t('guide'), href: 'trails/guide' },
      { label: t('registered-runners'), href: 'trails/registered-runners' },
    ],
    [t]
  );

  const isActive = (href: string) => {
    const target = `/${locale}/${href}`.replace(/\/+$/, '');
    const current = (pathname || '').replace(/\/+$/, '');
    if (href === '') return current === `/${locale}` || current === `/${locale}/`;
    return current === target || current.startsWith(target + '/');
  };

  const linkSx = (active: boolean) => ({
    px: 1.5,
    py: 1,
    borderRadius: 999,
    textTransform: 'none' as const,
    fontSize: '1.05rem',
    fontWeight: active ? 700 : 600,
    color: active ? '#1b5e20' : '#1f2937',
    backgroundColor: active ? 'rgba(46,125,50,0.10)' : 'transparent',
    '&:hover': {
      backgroundColor: 'rgba(46,125,50,0.12)',
    },
    position: 'relative' as const,
    '&::after': active
      ? {
          content: '""',
          position: 'absolute',
          left: '16%',
          right: '16%',
          bottom: 6,
          height: 2,
          borderRadius: 2,
          backgroundColor: '#2e7d32',
        }
      : {},
  });

  return (
    <>
      <AppBar
        position={isMobile ? 'fixed' : 'sticky'}
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,

          // prevent iOS/Safari sticky + backdrop-filter jitter on scroll
          backgroundColor: isMobile ? '#fff' : 'rgba(255,255,255,0.88)',
          backdropFilter: isMobile ? 'none' : 'blur(10px)',
          WebkitBackdropFilter: isMobile ? 'none' : 'blur(10px)',

          borderBottom: '1px solid rgba(17,24,39,0.08)',
          color: '#111827',

          // extra anti-jitter hints
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          willChange: 'transform',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1.1, display: 'flex', alignItems: 'center', gap: 2 }}>
            {/* Left: Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', minWidth: 160 }}>
              <Link href={`/${locale}`} aria-label="Rostushe Trails home">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Image
                    src={logoPic}
                    alt="Rostushe Trails"
                    width={120}
                    height={60}
                    priority
                    style={{ height: 44, width: 'auto', borderRadius: 10 }}
                  />
                </Box>
              </Link>
            </Box>

            {/* Center: Desktop Navigation */}
            {!isMobile && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  flex: 1,
                  justifyContent: 'center',
                }}
              >
                {pages.map((page) => {
                  const active = isActive(page.href);
                  return (
                    <Link key={page.href} href={`/${locale}/${page.href}`} passHref>
                      <Button sx={linkSx(active)}>{page.label}</Button>
                    </Link>
                  );
                })}

                {/* Trails Dropdown */}
                <Button
                  onClick={(e) => setTrailsAnchor(e.currentTarget)}
                  endIcon={
                    <ExpandMoreIcon
                      sx={{
                        transition: 'transform .18s ease',
                        transform: trailsAnchor ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  }
                  sx={linkSx(isActive('trails'))}
                >
                  {t('trails')}
                </Button>

                <Popover
                  open={Boolean(trailsAnchor)}
                  anchorEl={trailsAnchor}
                  onClose={() => setTrailsAnchor(null)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                  PaperProps={{
                    sx: {
                      mt: 1,
                      p: 1,
                      borderRadius: 3,
                      border: '1px solid rgba(17,24,39,0.08)',
                      boxShadow: '0 18px 50px rgba(0,0,0,0.10)',
                      minWidth: 240,
                    },
                  }}
                >
                  <Box sx={{ px: 1, py: 0.5 }}>
                    <Typography sx={{ fontSize: 12, fontWeight: 800, letterSpacing: 0.6, color: '#6b7280' }}>
                      {t('trails').toUpperCase()}
                    </Typography>
                  </Box>

                  {trailPages.map((trail) => (
                    <Link key={trail.href} href={`/${locale}/${trail.href}`} passHref>
                      <Button
                        onClick={() => setTrailsAnchor(null)}
                        fullWidth
                        sx={{
                          justifyContent: 'flex-start',
                          px: 1.5,
                          py: 1.1,
                          borderRadius: 2,
                          textTransform: 'none',
                          fontWeight: 650,
                          color: '#111827',
                          backgroundColor: isActive(trail.href) ? 'rgba(46,125,50,0.10)' : 'transparent',
                          '&:hover': { backgroundColor: 'rgba(46,125,50,0.10)' },
                        }}
                      >
                        {trail.label}
                      </Button>
                    </Link>
                  ))}
                </Popover>

                {/* Results CTA */}
                <Link href={`/${locale}/results`} passHref>
                  <Button
                    sx={{
                      ml: 1,
                      px: 2.5,
                      py: 1.05,
                      borderRadius: 999,
                      fontWeight: 800,
                      textTransform: 'none',
                      boxShadow: '0 10px 24px rgba(46,125,50,0.22)',
                      background: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
                      color: '#fff',
                      '&:hover': {
                        boxShadow: '0 14px 30px rgba(46,125,50,0.28)',
                        background: 'linear-gradient(135deg, #145a1b, #2e7d32)',
                      },
                    }}
                  >
                    {t('results')}
                  </Button>
                </Link>
              </Box>
            )}

            {/* Right: Language + Mobile menu button */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
              <LanguagePicker locale={locale} onChange={handleLanguageChange} />

              {isMobile && (
                <IconButton
                  aria-label="Open navigation"
                  onClick={() => setMobileOpen(true)}
                  sx={{
                    ml: 0.5,
                    borderRadius: 2,
                    border: '1px solid rgba(17,24,39,0.12)',
                  }}
                >
                  <MenuIcon />
                </IconButton>
              )}
            </Box>

            {/* Mobile Drawer */}
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={() => setMobileOpen(false)}
              PaperProps={{
                sx: {
                  width: 'min(86vw, 380px)',
                  borderLeft: '1px solid rgba(17,24,39,0.08)',
                },
              }}
            >
              <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.2 }}>
                  <Image
                    src={logoPic}
                    alt="Rostushe Trails"
                    width={92}
                    height={46}
                    priority
                    style={{ height: 38, width: 'auto', borderRadius: 10 }}
                  />
                  <Box>
                    <Typography sx={{ fontWeight: 900, lineHeight: 1.1 }}>Rostushe Trails</Typography>
                    <Typography sx={{ fontSize: 12, color: '#6b7280' }}>Menu</Typography>
                  </Box>
                </Box>
                <IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
                  <CloseIcon />
                </IconButton>
              </Box>

              <Divider />

              <List sx={{ px: 1 }}>
                {pages.map((page) => (
                  <Link key={page.href} href={`/${locale}/${page.href}`} onClick={() => setMobileOpen(false)}>
                    <ListItemButton
                      sx={{
                        borderRadius: 2,
                        my: 0.5,
                        backgroundColor: isActive(page.href) ? 'rgba(46,125,50,0.10)' : 'transparent',
                        '&:hover': { backgroundColor: 'rgba(46,125,50,0.10)' },
                      }}
                    >
                      <ListItemText
                        primary={page.label}
                        primaryTypographyProps={{ fontWeight: isActive(page.href) ? 800 : 650 }}
                      />
                    </ListItemButton>
                  </Link>
                ))}

                {/* Trails collapse */}
                <ListItemButton
                  onClick={() => setMobileTrailsOpen((v) => !v)}
                  sx={{
                    borderRadius: 2,
                    my: 0.5,
                    '&:hover': { backgroundColor: 'rgba(46,125,50,0.08)' },
                  }}
                >
                  <ListItemText primary={t('trails')} primaryTypographyProps={{ fontWeight: 800 }} />
                  <ExpandMoreIcon
                    sx={{
                      transition: 'transform .18s ease',
                      transform: mobileTrailsOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </ListItemButton>

                <Collapse in={mobileTrailsOpen} timeout="auto" unmountOnExit>
                  <Box sx={{ pl: 1 }}>
                    {trailPages.map((trail) => (
                      <Link key={trail.href} href={`/${locale}/${trail.href}`} onClick={() => setMobileOpen(false)}>
                        <ListItemButton
                          sx={{
                            borderRadius: 2,
                            my: 0.4,
                            ml: 1,
                            backgroundColor: isActive(trail.href) ? 'rgba(46,125,50,0.10)' : 'transparent',
                            '&:hover': { backgroundColor: 'rgba(46,125,50,0.10)' },
                          }}
                        >
                          <ListItemText
                            primary={trail.label}
                            primaryTypographyProps={{ fontWeight: isActive(trail.href) ? 800 : 650 }}
                          />
                        </ListItemButton>
                      </Link>
                    ))}
                  </Box>
                </Collapse>

                <Divider sx={{ my: 1.2 }} />

                {/* Results CTA mobile */}
                <Link href={`/${locale}/results`} onClick={() => setMobileOpen(false)}>
                  <ListItemButton
                    sx={{
                      borderRadius: 999,
                      my: 0.5,
                      background: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
                      color: '#fff',
                      boxShadow: '0 10px 22px rgba(46,125,50,0.22)',
                      '&:hover': { boxShadow: '0 14px 30px rgba(46,125,50,0.28)' },
                    }}
                  >
                    <ListItemText primary={t('results')} primaryTypographyProps={{ fontWeight: 900 }} />
                  </ListItemButton>
                </Link>
              </List>

              <Box sx={{ mt: 'auto', p: 2 }}>
                <Typography sx={{ fontSize: 12, color: '#6b7280' }}>
                  © {new Date().getFullYear()} Rostushe Trails
                </Typography>
              </Box>
            </Drawer>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer so content doesn't jump under fixed mobile AppBar */}
      {isMobile && <Toolbar sx={{ py: 1.1 }} />}
    </>
  );
}
