export function formatDate(date: string) {
   return new Date(date).toLocaleDateString([], {
      day: "numeric",
      month: "long",
      hour: "2-digit",
      minute: "2-digit",
   });
}
