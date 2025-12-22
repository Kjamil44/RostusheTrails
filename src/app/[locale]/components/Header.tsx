'use client';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
import logoPic from '../../../assets/images/logo.jpg';
import Link from 'next/link';
import { Locale, usePathname, useRouter } from '../../../../i18n/routing';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import LanguagePicker from './LanguagePicker';
import clsx from 'clsx';

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

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElTrails, setAnchorElTrails] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenTrailsMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElTrails(event.currentTarget);
  };

  const handleCloseTrailsMenu = () => {
    setAnchorElTrails(null);
  };

  const handleLanguageChange = (newLocale: string) => {
    router.replace(
      // @ts-expect-error -- TypeScript will validate that only known `params`
      // are used in combination with a given `pathname`. Since the two will
      // always match for the current route, we can skip runtime checks.
      { pathname, params },
      { locale: newLocale as Locale }
    );
  };

  const pages = [
    { label: t('home'), href: '' },
    { label: t('about-us'), href: 'about-us' },
    { label: t('accommodation'), href: 'accommodation' },
    { label: t('sponsors'), href: 'sponsors' },
    { label: t('contact'), href: 'contact' },
    { label: t('gallery'), href: 'gallery' },
  ];

  const trailPages = [
    { label: t('11km'), href: 'trails/eleven-km' },
    { label: t('27Km'), href: 'trails/twentyseven-km' },
    { label: t('guide'), href: 'trails/guide' },
    { label: t('registered-runners'), href: 'trails/registered-runners' },
  ];

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#fff', color: '#333', boxShadow: 2 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'center', gap: 4 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href={`/${locale}`} passHref>
              <Image src={logoPic} alt="Logo" width={120} height={60} style={{ cursor: 'pointer' }} />
            </Link>
          </Box>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {pages.map((page) => (
                <Link href={`/${locale}/${page.href}`} key={page.href} passHref>
                  <Button
                    sx={{
                      color: '#333',
                      fontSize: '1.2rem',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#a5d6a7',
                        color: '#000',
                      },
                    }}
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}

              {/* Trails Dropdown */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleOpenTrailsMenu}
                sx={{
                  color: '#333',
                  fontSize: '1.2rem',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#a5d6a7',
                    color: '#000',
                  },
                }}
              >
                {t('trails')}
              </Button>
              <Menu
                anchorEl={anchorElTrails}
                open={Boolean(anchorElTrails)}
                onClose={handleCloseTrailsMenu}
              >
                {trailPages.map((trail) => (
                  <MenuItem
                    key={trail.href}
                    onClick={handleCloseTrailsMenu}
                    component={Link}
                    href={`/${locale}/${trail.href}`}
                    sx={{
                      color: '#333',
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: '#a5d6a7',
                        color: '#000',
                      },
                    }}
                  >
                    {trail.label}
                  </MenuItem>
                ))}
              </Menu>

              {/* Results tab with green background */}
              <Link href={`/${locale}/results`} passHref>
                <Button
                  sx={{
                    px: 3,
                    py: 1,
                    borderRadius: '1rem',
                    fontWeight: 'bold',
                    fontSize: '1.125rem',
                    boxShadow: 2,
                    textTransform: 'none',
                    backgroundColor: '#2e7d32', // green-700 / green-100
                    color: '#fff', // white
                    '&:hover': {
                      backgroundColor: '#c8e6c9', // darker green / green-200
                      color: '#1b5e20'
                    },
                  }}
                >
                  {t('results')}
                </Button>
              </Link>
            </Box>
          )}

          {/* Language Picker */}
          <LanguagePicker locale={locale} onChange={handleLanguageChange} />

          {/* Mobile Menu */}
          {isMobile && (
            <Box sx={{ ml: 2 }}>
              <IconButton
                size="large"
                aria-label="menu"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                keepMounted
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.href}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href={`/${locale}/${page.href}`}
                  >
                    {page.label}
                  </MenuItem>
                ))}

                <MenuItem disabled sx={{ fontWeight: 'bold', fontSize: '1rem' }}>
                  {t('trails')}
                </MenuItem>
                {trailPages.map((trail) => (
                  <MenuItem
                    key={trail.href}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    href={`/${locale}/${trail.href}`}
                    sx={{ pl: 3 }} // Indent trails slightly
                  >
                    {trail.label}
                  </MenuItem>
                ))}

                {/* Mobile version of Results */}
                <MenuItem
                  onClick={handleCloseNavMenu}
                  component={Link}
                  href={`/${locale}/results`}
                  className={clsx(
                    'font-bold text-lg transition',
                    pathname?.endsWith('/results')
                      ? 'bg-green-700 text-white'
                      : 'bg-green-100 text-green-800 hover:bg-green-200'
                  )}
                >
                  {t('results')}
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
