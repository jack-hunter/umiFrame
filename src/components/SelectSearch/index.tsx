/*
 * @FilePath: \eic_frontend\src\component\SelectSearch\index.tsx
 * @Author: hunter
 * @Date: 2020-12-22 17:34:13
 * @LastEditors: hunter
 * @LastEditTime: 2021-04-12 14:40:35
 */

import { Select } from 'antd';
import pinyinMatch from 'pinyin-match';
import React from 'react';

/**
 * 输入拼音自动匹配汉字
 */
export const SelectSearch = (props: any) => {
  return (
    <Select
      showSearch
      filterOption={(input: string, option: { children: string }) => {
        return (
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0 ||
          pinyinMatch.match(option?.children.toLowerCase(), input.toLowerCase())
        );
      }}
      {...props}
    />
  );
};
