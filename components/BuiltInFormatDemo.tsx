'use client';
import React from 'react';
import {useTranslation} from '../i18n/client';
import type {LocaleTypes} from '../i18n/settings';
import {useParams} from 'next/navigation';
import Alert from '@mui/material/Alert';


const BuiltInFormatsDemo = () => {
  let locale = useParams()?.locale as LocaleTypes;

  const {t} = useTranslation(locale, 'built-in-demo');

  return (
    <div>
      <Alert severity="success">{t('testalert')}</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>
      <p>
        {/* "number": "Number: {{val, number}}", */}
        {t('number', {
          val: 123456789.0123,
        })}
      </p>
      <p>
        {/* "currency": "Currency: {{val, currency}}", */}
        {t('currency', {
          val: 123456789.0123,
          style: 'currency',
          currency: 'USD',
        })}
      </p>

      <p>
        {/* "dateTime": "Date/Time: {{val, datetime}}", */}
        {t('dateTime', {
          val: new Date(1234567890123),
          formatParams: {
            val: {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            },
          },
        })}
      </p>

      <p>
        {/* "relativeTime": "Relative Time: {{val, relativetime}}", */}
        {t('relativeTime', {
          val: 12,
          style: 'long',
        })}
      </p>

      <p>
        {/* "list": "List: {{val, list}}", */}
        {t('list', {
          // https://www.i18next.com/translation-function/objects-and-arrays#objects
          // Check the link for more details on `returnObjects`
          val: t('weekdays', {returnObjects: true}),
        })}
      </p>
    </div>
  );
};

export default BuiltInFormatsDemo;
