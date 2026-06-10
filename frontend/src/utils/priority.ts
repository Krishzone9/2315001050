
const weights = {
  Placement: 3,
  Result: 2,
  Event: 1,
};

export function getPriorityNotifications(
  notifications: any[],
  topN: number
) {
  return [...notifications]
    .sort((a, b) => {
      const diff =
        weights[b.type as keyof typeof weights] -
        weights[a.type as keyof typeof weights];

      if (diff !== 0) return diff;

      return (
        new Date(b.timestamp).getTime() -
        new Date(a.timestamp).getTime()
      );
    })
    .slice(0, topN);
}
