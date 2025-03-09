import styled from "styled-components";

const Wrapper = styled.section`
  @media (min-width: 992px) {
    display: none;
  }

  .container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: -1;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    visibility: hidden;
  }

  .show-sidebar {
    visibility: visible;
    z-index: 99;
    opacity: 1;
  }

  .content {
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 90vw;
    background: var(--surface);
    height: 95vh;
    padding: 4rem 2rem;
    border-radius: 0.4rem;

    color: var(--text-primary);
  }

  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    border: none;
    background: transparent;
    font-size: 1.5rem;
    color: var(--primary);
  }

  .nav-links {
    display: flex;
    gap: 0.5rem;
    flex-direction: column;
    padding-top: 2rem;
  }

  .nav-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 1.2rem;
    padding: 0.8rem;
    color: var(--text-primary);
    font-weight: bold;
  }

  .nav-link:visited {
    color: inherit;
  }

  .nav-link.active {
    color: var(--primary);
  }

  .nav-link:hover {
    opacity: 0.9;
  }

  .icon {
    margin-right: 1rem;
  }
`;

export default Wrapper;
