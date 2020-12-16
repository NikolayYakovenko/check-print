export const initialValues = {
  checkNumber: '123456',
  acquiringBank: 'Ukrsibbank',
  terminalId: 'test data',
  transactionId: 'test data',
  paymentPurpose: 'переказ особистих коштів між картками',
  paymentCreatedAt: new Date().toLocaleTimeString(),
  paymentValue: 0,
  paymentComission: 0,
  transferAmount: 0,
  payer: 'test data',
  payerCardNumber: 'test data',
  payerBank: 'test data',
  email: 'test@data.com',
  recipient: 'test data',
  recipientCardNumber: 'test data',
  recipientBank: 'test data',
  paymentMarketplace: 'https://',
  contacts: {
    phone: 'test data',
    email: 'test@data.com',
  },
  bank: 'tas',
  rrn: 'test data',
};

export const fieldMapping = {
  checkNumber: 'Квитанція №',
  acquiringBank: 'Банк-еквайр',
  terminalId: 'ID терміналу',
  transactionId: '№ операції',
  paymentPurpose: 'Призначення переказу',
  paymentCreatedAt: 'Час отримання доручення',
  paymentValue: 'Сума операції, грн.',
  paymentComission: 'в т.ч. сума комісії, грн.',
  transferAmount: 'сума переказу, грн.',

  payer: 'П.І.Б.',
  payerCardNumber: 'Картка відправника',
  payerBank: 'Банк відправника',
  email: 'E-mail',

  recipient: 'П.І.Б.',
  recipientCardNumber: 'Картка одержувача',
  recipientBank: 'Банк одержувача',

  paymentMarketplace: 'Переказ здійснено на:',
  contacts: 'Клієнтська підтримка',
  bank: 'Печатка банку',
  rrn: 'RRN',
};

export const sectionOneKeys = [
  'acquiringBank',
  'terminalId',
  'transactionId',
  'paymentPurpose',
  'paymentValue',
  'paymentComission',
  'transferAmount',
];

export const sectionTwoKeys = ['payer', 'payerCardNumber', 'payerBank', 'email'];

export const sectionThreeKeys = ['recipient', 'recipientCardNumber', 'recipientBank'];

export const sectionFourKeys = ['paymentMarketplace', 'contacts', 'rrn'];
