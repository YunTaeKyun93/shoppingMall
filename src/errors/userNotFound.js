class userNotFound extends Error() {
  constructor(userId) {
    super(`해당하는 유저ID를 가진 유저를 찾을 수 없습니다${userId}`);
    this.userId = userId;
  }
}
export default userNotFound;