const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ftp_new", () => {
    const testCase = "ftp_new.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ftp_open", () => {
    const testCase = "ftp_open.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ftp_open_with_datatype", () => {
    const testCase = "ftp_open_with_datatype.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok_secure_ftp", () => {
    const testCase = "ok_secure_ftp.rb"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})