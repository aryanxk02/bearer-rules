const { createInvoker, getEnvironment } = require("../../../helper.js")
const { ruleId, ruleFile, testBase } = getEnvironment(__dirname)

describe(ruleId, () => {
  const invoke = createInvoker(ruleId, ruleFile, testBase)
  

  test("ok_known_resource", () => {
    const testCase = "ok_known_resource.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("require_destructured_resource", () => {
    const testCase = "require_destructured_resource.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  

  test("require_external_resource", () => {
    const testCase = "require_external_resource.js"
    expect(invoke(testCase)).toMatchSnapshot();
  })
  
})