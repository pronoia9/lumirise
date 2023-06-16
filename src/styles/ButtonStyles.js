import { styled } from "styled-components";

export const UnfilledButton = styled.div`
  a, p {
    position: relative;
    height: 56px;
    display: inline-block;
    color: var(--c-font);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.7s cubic-bezier(0.3, 0, 0.3, 1);

    &:first-child {
      padding: 0 40px;
      line-height: 52px;
      text-align: center;
      vertical-align: top;
      outline: none !important;
      background: transparent;
      border: 2px solid var(--c-lineBorder);
      box-shadow: 5px 5px var(--c-lineShadow);
      border-radius: 56px;
      cursor: pointer;
      overflow: hidden;
      isolation: isolate;

      &:before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0%;
        height: 0%;
        background: var(--c-accent);
        transition: all 0.6s cubic-bezier(0.3, 0, 0.3, 1);
        transform: translate(-50%, -50%);
        border-radius: 56px;
        opacity: 0;
        z-index: -1;
        filter: blur(10px);
      }

      &:hover {
        &:before {
          width: calc(100% - 4px);
          height: calc(100% - 4px);
          opacity: 1;
          filter: blur(0px);
        }
      }
    }

    &:last-child {
      padding-left: 70px;
      line-height: 56px;
      vertical-align: top;

      &:before {
        content: '';
        position: absolute;
        left: -1px;
        top: 50%;
        margin-top: -1px;
        height: 2px;
        width: 40px;
        background: var(--c-font);
      }

      &:hover {
        color: var(--c-accent);
      }
    }
  }
`;
