import { Form } from 'formik';
import React from 'react';

import './CheckForm.css';

export const CheckForm = ({ isSubmitting, values, handleChange }) => {
  return (
    <Form className="formWrapper">
      <fieldset className="formRow">
        <label className="formLabel" htmlFor="checkNumber">
          Квитанція №
        </label>
        <input
          className="formInput"
          name="checkNumber"
          id="checkNumber"
          type="text"
          onChange={handleChange}
          value={values.checkNumber}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="acquiringBank">
          Банк-еквайр
        </label>
        <input
          className="formInput"
          name="acquiringBank"
          id="acquiringBank"
          type="text"
          onChange={handleChange}
          value={values.acquiringBank}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="terminalId">
          ID терміналу
        </label>
        <input
          className="formInput"
          name="terminalId"
          id="terminalId"
          type="text"
          onChange={handleChange}
          value={values.terminalId}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="transactionId">
          № операції
        </label>
        <input
          className="formInput"
          name="transactionId"
          id="transactionId"
          type="text"
          onChange={handleChange}
          value={values.transactionId}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="paymentPurpose">
          Призначення переказу
        </label>
        <input
          className="formInput"
          name="paymentPurpose"
          id="paymentPurpose"
          type="text"
          onChange={handleChange}
          value={values.paymentPurpose}
        />
      </fieldset>

      <fieldset className="formRow">
        {/*TODO: add mask for date value */}
        <label className="formLabel" htmlFor="paymentСreatedAt">
          Час отримання доручення
        </label>
        <input
          className="formInput"
          name="paymentCreatedAt"
          id="paymentCreatedAt"
          type="text"
          onChange={handleChange}
          value={values.paymentCreatedAt}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="paymentValue">
          Cума операції, грн.
        </label>
        <input
          className="formInput"
          name="paymentValue"
          id="paymentValue"
          type="number"
          onChange={handleChange}
          value={values.paymentValue}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="paymentComission">
          в т.ч. сума комісії, грн.
        </label>
        <input
          className="formInput"
          name="paymentComission"
          id="paymentComission"
          type="number"
          onChange={handleChange}
          value={values.paymentComission}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="transferAmount">
          сума переказу, грн.
        </label>
        <input
          className="formInput"
          name="transferAmount"
          id="transferAmount"
          type="number"
          onChange={handleChange}
          value={values.transferAmount}
        />
      </fieldset>

      <fieldset className="formRow">
        <legend>Відправник</legend>
        <div style={{ marginBottom: 10 }}>
          <label className="formLabel" htmlFor="payer">
            П.І.Б.
          </label>
          <input
            className="formInput"
            name="payer"
            id="payer"
            type="text"
            onChange={handleChange}
            value={values.payer}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label className="formLabel" htmlFor="payerCardNumber">
            Картка відправника
          </label>
          <input
            className="formInput"
            name="payerCardNumber"
            id="payerCardNumber"
            type="text"
            onChange={handleChange}
            value={values.payerCardNumber}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label className="formLabel" htmlFor="payerBank">
            Банк відправника
          </label>
          <input
            className="formInput"
            name="payerBank"
            id="payerBank"
            type="text"
            onChange={handleChange}
            value={values.payerBank}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label className="formLabel" htmlFor="email">
            E-mail
          </label>
          <input
            className="formInput"
            name="email"
            id="email"
            type="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>
      </fieldset>

      <fieldset className="formRow">
        <legend>Одержувач</legend>
        <div style={{ marginBottom: 10 }}>
          <label className="formLabel" htmlFor="recipient">
            П.І.Б.
          </label>
          <input
            className="formInput"
            name="recipient"
            id="recipient"
            type="text"
            onChange={handleChange}
            value={values.recipient}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label className="formLabel" htmlFor="recipientCardNumber">
            Картка одержувача
          </label>
          <input
            className="formInput"
            name="recipientCardNumber"
            id="recipientCardNumber"
            type="text"
            onChange={handleChange}
            value={values.recipientCardNumber}
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <label className="formLabel" htmlFor="recipientBank">
            Банк одержувача
          </label>
          <input
            className="formInput"
            name="recipientBank"
            id="recipientBank"
            type="text"
            onChange={handleChange}
            value={values.recipientBank}
          />
        </div>
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="paymentMarketplace">
          Платіж здійснено на:
        </label>
        <input
          className="formInput"
          name="paymentMarketplace"
          id="paymentMarketplace"
          type="number"
          onChange={handleChange}
          value={values.paymentMarketplace}
        />
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="contactsPhone">
          Клієнтська підтримка:
        </label>
        <div className="contactsWrapper">
          <div>
            <input
              className="formInput"
              name="contacts.phone"
              id="contactsPhone"
              type="text"
              onChange={handleChange}
              value={values.contacts.phone}
              placeholder="Номер телефону"
              title="Номер телефону"
            />
          </div>
          <div>
            <input
              className="formInput"
              name="contacts.email"
              type="email"
              onChange={handleChange}
              value={values.contacts.email}
              placeholder="E-mail"
              title="E-mail"
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="formRow">
        <legend>Печатка банку</legend>
        <div className="radioWrapper">
          <input name="bank" id="tas" type="radio" onChange={handleChange} value="tas" />
          <label className="formRadioLabel" htmlFor="tas">
            ТАС
          </label>
        </div>

        <div className="radioWrapper">
          <input name="bank" id="pumb" type="radio" onChange={handleChange} value="pumb" />
          <label className="formRadioLabel" htmlFor="pumb">
            ПУБМ
          </label>
        </div>

        <div className="radioWrapper">
          <input name="bank" id="oschad" type="radio" onChange={handleChange} value="oschad" />
          <label className="formRadioLabel" htmlFor="oschad">
            Ощадбанк
          </label>
        </div>
        <div className="radioWrapper">
          <input name="bank" id="privat" type="radio" onChange={handleChange} value="privat" />
          <label className="formRadioLabel" htmlFor="privat">
            Приватбанк
          </label>
        </div>
      </fieldset>

      <fieldset className="formRow">
        <label className="formLabel" htmlFor="rrn">
          RRN
        </label>
        <input className="formInput" name="rrn" type="text" onChange={handleChange} value={values.rrn} />
      </fieldset>

      <button className="submitButton" type="submit">
        Сформувати квитанцію
      </button>
    </Form>
  );
};
