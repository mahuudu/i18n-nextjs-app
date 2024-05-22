import React from 'react';

import {Box, Button, Grid, Typography, useMediaQuery} from '@mui/material';
import {useRouter, usePathname, useParams} from 'next/navigation';

import {useEffect, useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Link from 'next/link';

import {useTheme} from '@mui/material/styles';
import {LocaleTypes} from '@/i18n/settings';
import {useTranslation} from '@/i18n/client';

const MainHeaderMenuItem = (props: any) => {
  const {isRedirect = true, open} = props;
  const matches = useMediaQuery('(min-width:768px)');
  const [active, setActive]: any = useState();
  const theme: any = useTheme();

  const locale = useParams()?.locale as LocaleTypes;

  const {t} = useTranslation(locale, 'main-menu');

  const ListMenuMain: any = t('main-menu', {returnObjects: true});

  const activeMenu = (id: number) => {
    setActive(id);
  };

  const router = useRouter();

  const pathname = usePathname();

  const [listLabelExpand, setListLabelExpand] = useState([]);

  useEffect(() => {
    const handleSetLabelMenu = () => {
      if (!pathname || !pathname.length || pathname === '/' || matches) {
        return;
      }
      const listMenuHasSubItems = ListMenuMain.filter(
        (m: any) => m.subItems && m.subItems.length > 0,
      );
      if (!listMenuHasSubItems || !listMenuHasSubItems.length) {
        return;
      }
      const labelExpand = listMenuHasSubItems.find((m: any) => {
        const subItems: any = m.subItems;
        return subItems.some((subIt: any) => subIt.path === pathname);
      });
      if (!labelExpand) {
        return;
      }
      const newListLabelExpand: any = [...listLabelExpand];
      const isHasLabel = newListLabelExpand.some(
        (it: any) => it.label === labelExpand.label,
      );
      if (!isHasLabel) {
        newListLabelExpand.push(labelExpand);
        setListLabelExpand(newListLabelExpand);
      }
    };
    handleSetLabelMenu();
  }, [pathname]);

  const handleExpand = (menuInfo: any, e: any) => {
    if (matches) {
      return;
    }
    e.preventDefault();
    const newListLabelExpand: any = [...listLabelExpand];
    const indexMatch = newListLabelExpand.findIndex((it: any) => {
      return it.label === menuInfo.label;
    });
    if (indexMatch === -1) {
      newListLabelExpand.push(menuInfo);
    } else {
      newListLabelExpand.splice(indexMatch, 1);
    }
    setListLabelExpand(newListLabelExpand);
  };

  return (
    <div
      className={open ? 'menu active header-nav-main' : 'menu header-nav-main'}
    >
      <Grid container direction={'column'}>
        <div className="menu-main">
          {ListMenuMain.map((menuInfo: any, index: number) => {
            const {label, href, subItems, subClassName}: any = menuInfo;
            const hasSubMenu = subItems && subItems?.length > 0;
            const keyWrap = label + index;

            if (!hasSubMenu) {
              const isActive = pathname === href;
              const fullHref = `/${locale}${href}`;
              return (
                <Link
                  key={keyWrap}
                  href={fullHref}
                  className={isActive ? 'active nav-top-link' : 'nav-top-link'}
                >
                  <Typography variant="body2" className="nav-top-link-text">
                    {t(label)}
                  </Typography>
                </Link>
              );
            }
            const isActive = subItems.some((subIt: any) => {
              return subIt.path === pathname;
            });
            const isExpand =
              !matches &&
              listLabelExpand &&
              listLabelExpand.length > 0 &&
              listLabelExpand.some((it: any) => it.label === label);
            let clsSubMenu = ['list-menu'];
            if (subClassName && subClassName.length > 0) {
              clsSubMenu.push(subClassName);
            }
            if (isExpand) {
              clsSubMenu.push('expand');
            }
            return (
              <span
                className="subMenu nav-top-link"
                key={keyWrap}
                onClick={e => {
                  handleExpand(menuInfo, e);
                }}
              >
                <div
                  className={
                    isActive
                      ? 'active flex items-center w-full justify-between	'
                      : 'flex items-center w-full justify-between	'
                  }
                >
                  <Typography variant="body2" className="nav-top-link-text">
                    {' '}
                    {t(label)}
                  </Typography>
                  {isExpand ? (
                    <KeyboardArrowUpIcon />
                  ) : (
                    <KeyboardArrowDownIcon />
                  )}
                </div>
                <ul className={clsSubMenu.join(' ')}>
                  {subItems.map((subItem: any, indexSub: number) => {
                    const {name, path, isNewTab} = subItem;
                    const isActive = path === pathname;
                    const fullHref = `/${locale}${path}`;
                    return (
                      <li key={name + indexSub} className="mb-2">
                        <Link
                          href={fullHref}
                          target={isNewTab ? '_blank' : '_self'}
                        >
                          <Typography
                            className={
                              isActive
                                ? 'active nav-top-link-text'
                                : 'nav-top-link-text'
                            }
                          >
                            {name}
                          </Typography>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </span>
            );
          })}
        </div>
        <Box
          sx={{
            display: 'none',
            [theme.breakpoints.down('md')]: {
              display: 'block',
              my: 2,
              mx: 2,
            },
          }}
        ></Box>
      </Grid>
    </div>
  );
};

export default MainHeaderMenuItem;
