import React from "react";
import styles from "./SingleApplication.module.css";

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.SingleApplication}>
      <div className={styles.cell}>
        <sub>Company</sub>
        <span>{application.company}</span>
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        <span>
          {application.first_name} {application.last_name}
        </span>
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <span className={styles.email}>{application.email}</span>
      </div>
      <div className={styles.cell}>
        <sub>Loan Amount</sub>
        <span>{application.loan_amount}</span>
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        <span>{application.date_created}</span>
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        <span>{application.expiry_date}</span>
      </div>
    </div>
  );
};

export default SingleApplication;
