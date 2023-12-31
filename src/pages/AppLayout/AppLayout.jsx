import Map from "../../components/Map/Map";
import Sidebar from "../../components/Sidebar/Sidebar";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <>
      <main className={styles.main}>
        <Sidebar />
        <Map />
      </main>
    </>
  );
}

export default AppLayout;
