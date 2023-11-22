
export const fullOrderData = [
    { 
      orderId: '0001',
      data: {
      shipping: {address: 'USA'},
      contact: {
        name:'Stuart',
        phone: '123-122-3232',
      },
      status: {
        status: 'Processing',
        placedDate: new Date().getDate(),
        deliveredDate: new Date().getDate(),
      },
      payment: {
        paymentMethod: 'COD',
        paymemtReference: 'DEEFEFAWF',
        paymentDate: new Date().getDate(),
      },
      amount: {
        itemQty: 2,
        amount: 2560, 
        tax: 360,
        shippingFee: 200,
        subTotal: 2000
      },
      orderedItems: {
        item1: {
          name: 'Cheese Burger',
          price: 200,
          quantity: 1
        },
        item2: {
          name: 'Burger Fries',
          price: 1800,
          quantity: 1
        }
        
      }
    }
    },
    {
      orderId: '0002',
      data: {
      shipping: {address: 'Netherlands'},
      contact: {
        name:'Stuart',
        phone: '123-122-3232',
      },
      status: {
        status: 'Done',
        placedDate: new Date().getDate(),
        deliveredDate: new Date().getDate(),
      },
      payment: {
        paymentMethod: 'COD',
        paymemtReference: 'DEEFEFAWF',
        paymentDate: new Date().getDate(),
      },
      amount: {
        itemQty: 5,
        amount: 5060, 
        tax: 360,
        shippingFee: 200,
        subTotal: 4300
      },
      orderedItems: {
        item1: {
          name: 'Cheese Burger',
          price: 400,
          quantity: 2
        },
        item2: {
          name: 'Burger Fries',
          price: 3600,
          quantity: 2
        },
        item3: {
          name: 'Veg Cheese Burger',
          price: 500,
          quantity: 1
        }
        
      }
    }
    },
    {
      orderId: '0003',
      data: {
      shipping: {address: 'Netherlands'},
      contact: {
        name:'Stuart',
        phone: '123-122-3232',
      },
      status: {
        status: 'Pending',
        placedDate: new Date().getDate(),
        deliveredDate: new Date().getDate(),
      },
      payment: {
        paymentMethod: 'COD',
        paymemtReference: 'DEEFEFAWF',
        paymentDate: new Date().getDate(),
      },
      amount: {
        itemQty: 4,
        amount: 4560, 
        tax: 360,
        shippingFee: 200,
        subTotal: 4000
      },
      orderedItems: {
        item1: {
          name: 'Cheese Burger',
          price: 400,
          quantity: 2
        },
        item2: {
          name: 'Burger Fries',
          price: 3600,
          quantity: 2
        },       
      }
    }}
  ]


