const request = require('./request')

async function main () {
  try {
    const formData = {
      xtCreditCard1: '',
      txtCreditCard2: '',
      txtCreditCard4: '',
      txtEasyCard1: '',
      txtEasyCard2: '',
      txtEasyCard3: '',
      txtEasyCard4: '',
    }

    const options = {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8'
      },
      url: `https://ezweb.easycard.com.tw/Event01/JCBLoginServlet`,
      formData: formData
    }

    const data = await request.post(options)
    console.log(data.body)
  } catch (err) {
    console.log(err)
  }
}

main()
