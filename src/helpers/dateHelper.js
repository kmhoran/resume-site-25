// function to convert a span of dates into a human-readable string
export function formatTimespan(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();
  let days = end.getDate() - start.getDate();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (days < 0) {
    months--;
    const previousMonth = new Date(end.getFullYear(), end.getMonth(), 0);
    days += previousMonth.getDate();
  }

  const content = [];
  if (years > 0) content.push(`${years} year${years > 1 ? "s" : ""}`);
  if (months > 0) content.push(`${months} month${months > 1 ? "s" : ""}`);
  if (days > 0) content.push(`${days} day${days > 1 ? "s" : ""}`);

  let timespan = "";
  const contentLen = content.length;
  content.forEach((part, i) => {
    if (i > 0) {
      timespan += ", ";
      if (i + 1 == contentLen) timespan += "and ";
    }
    timespan += part;
  });

  return timespan.trim() || "0 days";
}
