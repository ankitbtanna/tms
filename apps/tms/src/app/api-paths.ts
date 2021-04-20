/* eslint-disable no-template-curly-in-string */
export const API_PATHS = {
  USERS: {
    REGISTER: 'http://ebharat-tms.in/api/user/register',
    UPDATE: 'http://ebharat-tms.in/api/user/${username}',
    CHECK_USER_EXISTS: 'http://ebharat-tms.in/api/user/check/${username}',
    GET_USER_DETAILS: 'http://ebharat-tms.in/api/user/details/${username}',
    GET_USER_SUBSCRIPTION_DETAILS: 'http://ebharat-tms.in/api/user/subscription-details/${username}',
    LOGIN: 'http://ebharat-tms.in/api/user/login',
    UPDATE_PASSWORD: 'http://ebharat-tms.in/api/user/update-password'
  },
  SHARE_TMS: {
    GET_ALL_STAKEHOLDERS: 'http://ebharat-tms.in/api/share/stakeholders/${username}',
    ADD_SHAKEHOLDER: 'http://ebharat-tms.in/api/share/add-stakeholder',
    DELETE_SHAKEHOLDER: 'http://ebharat-tms.in/api/share/delete-stakeholder',
    BLOCK_SHAKEHOLDER: 'http://ebharat-tms.in/api/share/block-stakeholder'
  },
  TENDERS: {
    GET_TENDERS_BY_USERNAME: 'http://ebharat-tms.in/api/tenders/all-tenders/${username}',
    GET_ACTIVE_TENDERS_BY_USERNAME: 'http://ebharat-tms.in/api/tenders/active/${username}',
    GET_COMPLETE_TENDERS_BY_USERNAME: 'http://ebharat-tms.in/api/tenders/complete/${username}',
    GET_NOT_FILLED_TENDERS_BY_USERNAME: 'http://ebharat-tms.in/api/tenders/not-filled/${username}',
    CREATE_TENDER: 'http://ebharat-tms.in/api/tenders',
    EDIT_TENDER: 'http://ebharat-tms.in/api/tenders/update/${tenderId}',
    DELETE_TENDER: 'http://ebharat-tms.in/api/tenders/delete/${tenderId}',
    UPDATE_TENDER: 'http://ebharat-tms.in/api/tenders/update/${tenderId}'
  },
  TRANSACTION: {
    CREATE_TRANSACTION: 'http://ebharat-tms.in/api/transaction',
    UPDATE_TRANSACTION: 'http://ebharat-tms.in/api/transaction/update-transaction/${transactionId}',
    GENERATE_ORDER: 'http://ebharat-tms.in/api/transaction/order-id',
    VERIFY_ORDER: 'http://ebharat-tms.in/api/transaction/order-id/${orderId}'
  },
  CONTACT_US: {
    CREATE_QUERY: 'http://ebharat-tms.in/api/contact-us'
  },
  FORGOT_PASSWORD: {
    GENERATE_FORGOT_PASSWORD_LINK: 'http://ebharat-tms.in/api/forgot-password/generate-link/${email}',
    VERIFY_FORGOT_PASSWORD_TOKEN: 'http://ebharat-tms.in/api/forgot-password/verify-token/${email}/${token}',
    RESET_PASSWORD: 'http://ebharat-tms.in/api/forgot-password/reset-password'
  }
};
