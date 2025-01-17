import React from "react";
import styles from "./SingleApplication.module.css";
import { Application } from "./Applications";

const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP", // Assumption each amount is in GBP
    maximumFractionDigits: 0,
  }).format(amount);
};

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
};

interface ApplicationProps {
  application: Application;
}

const SingleApplication: React.FC<ApplicationProps> = ({ application }) => {
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
        <span>{formatCurrency(application.loan_amount)}</span>
      </div>
      <div className={styles.cell}>
        <sub>Application Date</sub>
        <span>{formatDate(application.date_created)}</span>
      </div>
      <div className={styles.cell}>
        <sub>Expiry date</sub>
        <span>{formatDate(application.expiry_date)}</span>
      </div>
    </div>
  );
};

export default SingleApplication;
