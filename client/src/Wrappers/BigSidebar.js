import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;

  @media (min-width: 992px) {
    display: block;
  }

  .container {
    background: var(--surface);
    min-height: 100vh;
    height: 100%;
    width: 250px;
    margin-left: -250px;
    transition: margin-left 0.3s ease-in-out;
  }

  .show-sidebar {
    margin-left: 0;
  }

  .content {
    position: sticky;
    top: 0;
  }

  header {
    height: 6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-primary);
  }

  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }

  .nav-link {
    display: flex;
    gap: 1rem;
    align-items: center;
    color: var(--text-primary);
    padding: 1rem 0;
    padding-left: 2.5rem;
    text-decoration: none;
  }

  .nav-link.active {
    color: var(--primary);
  }

  .nav-link:hover {
    opacity: 0.9;
  }
`;

export default Wrapper;
