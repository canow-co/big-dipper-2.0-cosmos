import ConditionExplanation from '@/components/condition_explanation';
import InfoPopover from '@/components/info_popover';
import Typography from '@material-ui/core/Typography';
import { Translate } from 'next-translate';
import React from 'react';

export const fetchColumns = (
  t: Translate
): {
  key: string;
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  width: number;
  component?: React.ReactNode;
  sortKey?: string;
  sort?: boolean;
}[] => [
  {
    key: 'idx',
    width: 5,
  },
  {
    key: 'validator',
    sortKey: 'validator.name',
    width: 25,
    sort: true,
  },
  {
    key: 'votingPower',
    sortKey: 'votingPower',
    width: 25,
    sort: true,
  },
  {
    key: 'commission',
    sortKey: 'commission',
    align: 'right',
    width: 15,
    sort: true,
  },
  {
    key: 'status',
    align: 'center',
    width: 12,
  },
  {
    key: 'condition',
    align: 'center',
    width: 10,
    component: (
      <Typography variant="h4" className="label popover">
        {t('condition')}
        <InfoPopover content={ConditionExplanation} />
      </Typography>
    ),
  },
  {
    key: 'liquidStaking',
    sortKey: 'liquidStaking',
    align: 'left',
    width: 8,
    sort: true,
  },
];
