const moment = require("moment");

if (pm.variables.get("pslid") == "royalfree") {
    const startOfNextMonth = moment().add(2, "months").startOf("month");
    pm.variables.set(
        "start_date",
        startOfNextMonth.format("YYYY-MM-DD")
    );
        pm.variables.set(
        "start-date",
        startOfNextMonth.format("YYYY-MM-DD")
    );
} else {
    pm.variables.set(
        "start_date",
        addWorkingDays(new moment(), 12).format("YYYY-MM-DD")
    );
    pm.variables.set(
        "start-date",
        addWorkingDays(new moment(), 12).format("YYYY-MM-DD")
    );
}

 let targetDate = moment();
    pm.variables.set( "today", targetDate.format("YYYY-MM-DD"));
    pm.variables.set( "today", targetDate.format("d"));
    pm.variables.set( "next_working_day",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "next_working_day_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_two_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_two_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_three_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_three_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_four_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_four_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_five_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_five_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_six_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_six_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_seven_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_seven_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_eight_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_eight_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_nine_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_nine_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_ten_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_ten_working_days_day_of_week",targetDate.format("d"));
    pm.variables.set( "in_eleven_working_days",addWorkingDays(targetDate, 1).format("YYYY-MM-DD"));
    pm.variables.set( "in_eleven_working_days_day_of_week",targetDate.format("d"));

    let datePast = moment().subtract(1, "days");
    pm.variables.set( "yesterday", datePast.format("YYYY-MM-DD"));
    pm.variables.set( "two_working_days_ago", addWorkingDays(datePast, -1).format("YYYY-MM-DD"));
    pm.variables.set( "three_working_days_ago", addWorkingDays(datePast, -1).format("YYYY-MM-DD"));
    pm.variables.set( "four_working_days_ago", addWorkingDays(datePast, -1).format("YYYY-MM-DD"));
    pm.variables.set( "five_working_days_ago", addWorkingDays(datePast, -1).format("YYYY-MM-DD"));
    pm.variables.set( "six_working_days_ago", addWorkingDays(datePast, -1).format("YYYY-MM-DD"));
    pm.variables.set( "seven_working_days_ago", addWorkingDays(datePast, -1).format("YYYY-MM-DD"));
    
    let dateMonth = addWorkingDays(moment(), 1);
    pm.variables.set( "next_month",dateMonth.add(1, "months").format("YYYY-MM-DD"));
    pm.variables.set( "in_two_months", dateMonth.add(1, "months").format("YYYY-MM-DD") );
    pm.variables.set( "in_three_months", dateMonth.add(1, "months").format("YYYY-MM-DD") );
    pm.variables.set( "in_four_months", dateMonth.add(1, "months").format("YYYY-MM-DD") );
    pm.variables.set( "in_five_months", dateMonth.add(1, "months").format("YYYY-MM-DD") );
    pm.variables.set( "in_six_months", dateMonth.add(1, "months").format("YYYY-MM-DD") );
    pm.variables.set( "in_seven_months", dateMonth.add(1, "months").format("YYYY-MM-DD") );

    pm.variables.set( "in_one_year",moment().add(1, "years").format("YYYY-MM-DD"));
    pm.variables.set( "in_five_years",moment().add(5, "years").format("YYYY-MM-DD"));
    pm.variables.set( "in_ten_years",moment().add(10, "years").format("YYYY-MM-DD"));
    pm.variables.set( "one_year_ago", moment().subtract(52, "weeks").format("YYYY-MM-DD"));
    pm.environment.set( "one_year_ago_day_of_week", moment().subtract(52, "weeks").format("d"));
    pm.variables.set( "five_years_ago",moment().subtract(5, "years").format("YYYY-MM-DD"));
    pm.variables.set( "ten_years_ago",moment().subtract(10, "years").format("YYYY-MM-DD"));

let monthDay = moment().endOf('month');

    pm.variables.set( "next_month_1", monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_2",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_3",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_4",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_5",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_6",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_7",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_8",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_9",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_10",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_11",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_12",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_13",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_14",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_15",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_16",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_17",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_18",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_19",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_20",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_21",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_22",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_23",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_24",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_25",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_26",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_27",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_28",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_29",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_30",monthDay.add(1, "days").format("YYYY-MM-DD"));
    pm.variables.set( "next_month_31",monthDay.add(1, "days").format("YYYY-MM-DD"));

    const startDate = new moment(pm.variables.get ("start_date"));
    pm.variables.set( "start_year", startDate.year());
    pm.variables.set( "start_month", startDate.month() + 1); // zero based
    pm.variables.set( "start_day", startDate.date());

    const endDate = startDate.add ("2", "years");
    pm.variables.set( "end_date", endDate);
    pm.variables.set( "end_year", endDate.year());
    pm.variables.set( "end_month", endDate.month());
    pm.variables.set( "end_day", endDate.date());
