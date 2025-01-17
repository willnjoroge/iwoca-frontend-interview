import React, { useState, useEffect } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { Button } from "./ui/Button/Button";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchApplications = async () => {
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch(
        `http://localhost:3001/api/applications?_page=${page}&_limit=5`
      );
      const data = await response.json();

      const linkHeader = response.headers.get("Link");
      const hasNextPage = linkHeader?.includes('rel="next"') ? true : false;
      setHasMore(hasNextPage);

      setApplications((prevApplications) => [...prevApplications, ...data]);
    } catch (error) {
      setError(
        "An error occurred while loading the applications. Please try again."
      );
      console.error("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadMoreApplications = () => {
    if (error) {
      fetchApplications();
    } else if (!isLoading && hasMore) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, [page]);

  return (
    <div className={styles.Applications}>
      {applications.map((application) => (
        <SingleApplication key={application.id} application={application} />
      ))}

      {hasMore && (
        <Button
          className={styles.button}
          isLoading={isLoading}
          onClick={loadMoreApplications}
        />
      )}

      {error && <p>{error}</p>}

      {!hasMore && !isLoading && (
        <p>All {applications.length} applications have been loaded</p>
      )}
    </div>
  );
};

export default Applications;
