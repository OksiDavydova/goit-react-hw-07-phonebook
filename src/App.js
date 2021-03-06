import "./App.css";
import { ToastContainer } from "react-toastify";
// import { connect } from "react-redux";

import Container from "./components/Container/Container";
import HeroTitle from "./components/Title/Title";
import SectionTitle from "./components/Title/SectionTitle/SectionTitle";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <>
      <Container>
        <HeroTitle title="Phonebook" />
        <ContactForm />
        <>
          <SectionTitle sectionTitle="Contacts" />
          <Filter />
          <ContactList />
        </>
      </Container>
      <ToastContainer theme="dark" autoClose={3000} />
    </>
  );
}

export default App;
