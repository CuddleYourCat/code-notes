nextWorkingDay = function (fromDate) {
    if (fromDate.day() == 0 || fromDate.day() == 6) {
        fromDate.day() == 0 ? fromDate.add(1, 'days') : fromDate.add(2, 'days');
    }
    // bank holidays
    if (fromDate.isSame('2023-04-07', 'day')) fromDate.add(4, 'days');
    if (fromDate.isSame('2023-04-10', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2023-05-01', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2023-05-08', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2023-05-29', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2023-08-28', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2023-12-25', 'day')) fromDate.add(2, 'days');
    if (fromDate.isSame('2023-12-26', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2024-01-01', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2024-08-26', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2024-12-25', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2024-12-26', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2025-01-01', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2025-04-18', 'day')) fromDate.add(4, 'days');
    if (fromDate.isSame('2025-04-21', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2025-05-05', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2025-05-26', 'day')) fromDate.add(1, 'days');
    if (fromDate.isSame('2025-08-25', 'day')) fromDate.add(1, 'days');

    return fromDate;
};
