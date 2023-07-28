const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("missing_integrity_check", () => {
    const testCase = "missing_integrity_check.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("ok", () => {
    const testCase = "ok.java"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})