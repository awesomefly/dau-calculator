export const INTRO = {
  zh: {
    header: 'DAU (Daily Active Users)，即某一天活跃的总用户数。我们可以使用简单的数学模型来预测用户留存情况，并据此预测未来的 DAU。',
    footer: '实际情况中，投放拉新的用户留存会比自然新增的用户留存低，用户的生命周期可能也没有那么长，用户半年后可能都完全流失了。所以这只是个很粗略的模型。\n\n希望这个小工具，能让更多人了解如何科学地做用户增长。',
    downloadAsCsv: '下载 csv 表格'
  },
  en: {
    header: 'DAU (Daily Active Users), which refers to the total number of active users in a day. We can use a simple mathematical model to predict user retention and, based on this, forecast future DAU."',
    footer: 'In actual scenarios, the retention of users acquired through new promotions is lower than that of naturally added users, and the user lifecycle might not be as long, leading to complete user attrition after six months. Thus, this is a very rough model.\n\nWe hope this tool can help more people understand how to scientifically grow their user base.',
    downloadAsCsv: 'Download table as CSV'
  }
}

export const RETENTION = {
  zh: {
    newUserTitle: '新用户留存曲线拟合',
    stockUserTitle: '活跃用户留存曲线拟合',
    desc: '使用乘幂函数进行拟合，与 excel 中绘制散点图并使用乘幂函数进行拟合，是相同的。',
    newUser1dayRetentionRate: '新用户次留',
    newUser1dayRetentionRateDesc: '新用户次日留存率，当天的新用户，在第 2 天仍然活跃的比例',
    newUser7dayRetentionRate: '新用户七留',
    newUser7dayRetentionRateDesc: '新用户七日留存率，当天的新用户，在第 7 天仍然活跃的比例',
    newUser30dayRetentionRate: '新用户三十留',
    newUser30dayRetentionRateDesc: '新用户三十日留存率，当天的新用户，在第 30 天仍然活跃的比例',
    stockUser1dayRetentionRate: '活跃用户次留',
    stockUser1dayRetentionRateDesc: '当前活跃用户在预测第 1 天仍然活跃的比例',
    stockUser7dayRetentionRate: '活跃用户七留',
    stockUser7dayRetentionRateDesc: '当前活跃用户在预测第 7 天仍然活跃的比例',
    stockUser30dayRetentionRate: '活跃用户三十留',
    stockUser30dayRetentionRateDesc: '当前活跃用户在预测第 30 天仍然活跃的比例'
  },
  en: {
    newUserTitle: 'New User Retention Curve',
    stockUserTitle: 'Active User Retention Curve',
    desc: 'Fitting with a power function, the same as plotting a scatter chart in Excel and fitting it with a power function.',
    newUser1dayRetentionRate: 'New user 1-day retention',
    newUser1dayRetentionRateDesc: 'The 1-day retention rate for new users, indicating the proportion of new users from the current day who are still active on the second day.',
    newUser7dayRetentionRate: 'New user 7-day retention',
    newUser7dayRetentionRateDesc: 'The 7-day retention rate for new users, indicating the proportion of new users from the current day who are still active on the seventh day.',
    newUser30dayRetentionRate: 'New user 30-day retention',
    newUser30dayRetentionRateDesc: 'The 30-day retention rate for new users, indicating the proportion of new users from the current day who are still active on the thirtieth day.',
    stockUser1dayRetentionRate: 'Active user 1-day retention',
    stockUser1dayRetentionRateDesc: 'The proportion of current active users still active on forecast day 1.',
    stockUser7dayRetentionRate: 'Active user 7-day retention',
    stockUser7dayRetentionRateDesc: 'The proportion of current active users still active on forecast day 7.',
    stockUser30dayRetentionRate: 'Active user 30-day retention',
    stockUser30dayRetentionRateDesc: 'The proportion of current active users still active on forecast day 30.'
  }
}

export const DAU = {
  zh: {
    title: 'DAU 趋势',
    desc: '预测 DAU 由两部分相加：预测起点的活跃用户按活跃用户留存曲线衰减，以及预测期内每日新增用户按新用户留存曲线累积。\n\nDAU(n)=S×Rs(n)+A×(1+Rn(1)+...+Rn(n-1))\n\n其中，S 为当前活跃用户数，Rs 为活跃用户留存率，A 为每日新增用户数，Rn 为新用户留存率。',
    dailyNewUserCount: '每日新用户数',
    retainedUserCount: '当前活跃用户数',
    retainedDesc: '预测起点当天的活跃用户数，即当前 DAU；预测后会按活跃用户留存曲线逐日衰减',
    forecastDayCount: '预测天数',
    finalDAU: '最终 DAU 约为'
  },
  en: {
    title: 'DAU Trend',
    desc: 'Forecast DAU is the sum of two parts: current active users declining along the active-user retention curve, and daily new-user cohorts accumulating along the new-user retention curve.\n\nDAU(n)=S×Rs(n)+A×(1+Rn(1)+...+Rn(n-1))\n\nS is current active-user DAU, Rs is active-user retention, A is daily new users, and Rn is new-user retention.',
    dailyNewUserCount: 'Daily new user count',
    retainedUserCount: 'Current active-user DAU',
    retainedDesc: 'Active users on the forecast start date; this cohort declines along the active-user retention curve',
    forecastDayCount: 'Forecast Days',
    finalDAU: 'Final DAU is around'
  }
}
