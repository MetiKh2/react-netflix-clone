import React, { useEffect, useState } from "react";
import styles from "./ProfileScreen.module.css";
import userAvatar from "../../images/R.png";
import { Plan } from "../../components/index";
import {serverTimestamp } from "firebase/firestore"; 
import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/user/userSlice";
const ProfileScreen = () => {
  const [plans, setPlans] = useState([]);
  const [userPlans, setUserPlans] = useState([]);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchPlans() {
      const querySnapshot = await getDocs(collection(db, "Plan"));
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setPlans(list);
    }
    async function fetchUserPlans() {
      const q = query(
        collection(db, "UserPlans"),
        where("userId", "==", user.uid)
        // ,where('timeOut','>',new Date(Date.now()).getTime())
      );
      const querySnapshot = await getDocs(q);
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setUserPlans(list.filter(p=>p.timeOut>new Date(Date.now()).getTime()).sort(((a,b)=>a.timeOut-b.timeOut)));
      // setUserPlans(list);
    }
    fetchPlans();
    fetchUserPlans();
  }, []);
  async function addPlan(type) {
   const date=new Date(Date.now());
    if (user) {
      await addDoc(collection(db, "UserPlans"), {
        userId: user.uid,
        plan: type,
        timeOut:date.setMonth(date.getMonth()+1),
      });
      window.location.reload();
    }
  }
  function signout() {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  }
  return (
    <div className={styles.container}>
      <div className={styles.container2}>
        <div className={styles.header}>
          <h1>Edit Profile</h1>
        </div>
        <div className={styles.body}>
          <div className={styles.img}>
            <img width={100} src={userAvatar} />
          </div>
          <div className={styles.planContainer}>
            <div className={styles.inputContainer}>
              <input
                readOnly
                type={"email"}
                value={user.email}
                placeholder="Mahdi@gmail.com"
              />
              <p>Plans (Current Plan : premium)</p>
            </div>
            <p className={styles.date}>Reveral date : {new Date(userPlans[userPlans.length-1]?.timeOut).toLocaleDateString()}</p>
              {plans.map((plan) => (
                  <Plan
                    addPlan={addPlan}
                    isCurrent={
                      userPlans.filter((p) => p.plan == plan.Type).length > 0
                        ? true
                        : false
                    }
                    key={plan.id}
                    title={plan.Type}
                    price={plan.Price}
                  />
                ))}
               <button onClick={signout} className={styles.signOut}>
              Signout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
