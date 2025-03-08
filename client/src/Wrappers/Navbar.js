import styled from "styled-components";

const Wrapper = styled.nav`
  height: 6rem;
  background: var(--surface);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  .content {
    width: 90vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .theme-btn {
    border: none;
    background: var(--primary);
    color: #fff;
    padding: 0.5rem 0.8rem;
    border-radius: 0.4rem;
    cursor: pointer;
  }

  .toggle-theme {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .logo {
    color: var(--text-primary);
  }
  .theme-icon {
    font-size: 1rem;
    font-weight: 900;
  }
  .toggle-btn {
    border: none;
    background: transparent;
    font-size: 2rem;
    color: var(--primary);
    cursor: pointer;
  }

  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .content {
      width: 90%;
    }
  }
`;

export default Wrapper;
