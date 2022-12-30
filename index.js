

const calculator_block_v2 = async (req, res) => {

  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({success: true, msg: "Health check success"}))
    res.end()
  }

  // Add your code here
  res.write(JSON.stringify({success: true, msg: `Hello calculator_block_v2`}))
  res.end()
  
}

export default calculator_block_v2
