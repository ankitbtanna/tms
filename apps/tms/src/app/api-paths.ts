/* eslint-disable no-template-curly-in-string */
export const API_PATHS = {
  USERS: {
    REGISTER: 'http://localhost:8080/api/user/register',
    UPDATE: 'http://localhost:8080/api/user/${username}',
    CHECK_USER_EXISTS: 'http://localhost:8080/api/user/check/${username}',
    GET_USER_DETAILS: 'http://localhost:8080/api/user/details/${username}',
    GET_USER_SUBSCRIPTION_DETAILS: 'http://localhost:8080/api/user/subscription-details/${username}',
    LOGIN: 'http://localhost:8080/api/user/login'
  },
  SHARE_TMS: {
    GET_ALL_STAKEHOLDERS: 'http://localhost:8080/api/share/stakeholders/${username}',
    ADD_SHAKEHOLDER: 'http://localhost:8080/api/share/add-stakeholder',
    DELETE_SHAKEHOLDER: 'http://localhost:8080/api/share/delete-stakeholder',
    BLOCK_SHAKEHOLDER: 'http://localhost:8080/api/share/block-stakeholder'
  },
  TENDERS: {
    GET_TENDERS_BY_USERNAME: 'http://localhost:8080/api/tenders/all-tenders/${username}',
    GET_ACTIVE_TENDERS_BY_USERNAME: 'http://localhost:8080/api/tenders/active/${username}',
    GET_COMPLETE_TENDERS_BY_USERNAME: 'http://localhost:8080/api/tenders/complete/${username}',
    GET_NOT_FILLED_TENDERS_BY_USERNAME: 'http://localhost:8080/api/tenders/not-filled/${username}',
    CREATE_TENDER: 'http://localhost:8080/api/tenders',
    DELETE_TENDER: 'http://localhost:8080/api/tenders/delete/${tenderId}',
    UPDATE_TENDER: 'http://localhost:8080/api/tenders/update/${tenderId}'
  },
  TRANSACTION: {
    CREATE_TRANSACTION: 'http://localhost:8080/api/transaction',
    UPDATE_TRANSACTION: 'http://localhost:8080/api/transaction/update-transaction/${transactionId}',
    GENERATE_ORDER: 'http://localhost:8080/api/transaction/order-id',
    VERIFY_ORDER: 'http://localhost:8080/api/transaction/order-id/${orderId}'
  },
  CONTACT_US: {
    CREATE_QUERY: 'http://localhost:8080/api/contact-us'
  }
};
