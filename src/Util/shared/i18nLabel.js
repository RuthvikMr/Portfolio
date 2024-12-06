import React from 'react';
import { useTranslation } from 'react-i18next';

const I18nLabel = ({ i18nKey, children, ...props }) => {
  const { t } = useTranslation();
  return <label {...props}>{t(i18nKey) || children}</label>;
};

export default I18nLabel;
