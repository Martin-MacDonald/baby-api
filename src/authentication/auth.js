module.exports = (context) => {
  if (!context.user) throw new Error('user not authenticated');
  return;
};