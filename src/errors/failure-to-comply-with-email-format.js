class FailureToComplyWithEamilFormat extends Error {
  constructor(id) {
    super(`이메일 형식이 맞지 않습니다.${id}`);
    this.id = id;
  }
}
export default FailureToComplyWithEamilFormat;