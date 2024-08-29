import { UserButton, useUser } from "@clerk/clerk-react";
import "./Header.scss";

export const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <header className="Header">
      <div className="Header__logo">
        <a href="#">
          <svg
            id="tehnikum-logo"
            viewBox="0 0 143 23"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.1657 1.07477H0V4.08411H5.26629V21.9252H8.10198V4.08411H13.1657V1.07477Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24.0021 23C28.516 23 32.3852 20.0712 34.0145 15.9065H30.3634C29.0072 18.1069 26.6646 19.5607 24.0021 19.5607C20.1157 19.5607 16.9109 16.4631 16.4606 12.4673H34.8385V11.0701C34.8385 10.9925 34.8326 10.9163 34.8211 10.8422C34.4998 4.79698 29.7789 0 24.0021 0C18.0173 0 13.1657 5.14873 13.1657 11.5C13.1657 17.8513 18.0173 23 24.0021 23ZM31.4018 9.6729C30.6218 6.10121 27.6049 3.43925 24.0021 3.43925C20.3993 3.43925 17.3824 6.10121 16.6025 9.6729H31.4018Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M36.864 21.9252V1.07477H39.6997V9.24299H51.6501V1.07477H54.4858V21.9252H51.6501V12.2523H39.6997V21.9252H36.864Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M57.119 21.9252V1.07477H65.221L66.7808 18.9159H69.272V1.07477H72.3102V21.9252H64.0057L62.4458 4.08411H60.1572V21.9252H57.119Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M89.2856 11.5L104.11 4.72897V0.859813L88.3116 8.07571V1.07477H85.2734V21.9252H88.3116V14.9243L104.11 22.1402V18.271L89.2856 11.5Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M106.744 21.9252V1.07477H109.782V18.9159H116.871V1.07477H119.909V21.9252H106.744Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M122.542 21.9252V1.07477H130.037L131.943 18.9159H133.802L135.708 1.07477H143V21.9252H139.962V3.65421H138.471L136.518 21.9252H129.227L127.274 3.65421H125.581V21.9252H122.542Z"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M77.3739 18.9159V4.08411H74.5382V1.07477H82.8428V4.08411H80.2096V18.9159H82.8428V21.9252H74.5382V18.9159H77.3739Z"
            />
          </svg>
        </a>
      </div>
      <div className="input-wrapper">
        <svg
          className="icon icon-search"
          viewBox="0 0 18 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="glass"
            d="M13.1988 11.6083H12.3648L12.0691 11.3234C12.7289 10.5574 13.2112 9.65499 13.4813 8.6809C13.7514 7.70682 13.8028 6.6851 13.6317 5.68886C13.1355 2.7555 10.6861 0.413034 7.72986 0.0542773C6.69056 -0.0771269 5.63496 0.0308227 4.64383 0.369866C3.6527 0.708908 2.75231 1.27006 2.01155 2.01038C1.2708 2.75069 0.709324 3.65056 0.370083 4.64111C0.0308408 5.63166 -0.0771721 6.68664 0.0543092 7.72533C0.413276 10.6798 2.75712 13.1278 5.6922 13.6237C6.68902 13.7947 7.71134 13.7434 8.68599 13.4734C9.66065 13.2034 10.5635 12.7215 11.3301 12.0621L11.6151 12.3575V13.1911L16.1022 17.6755C16.5351 18.1082 17.2425 18.1082 17.6753 17.6755C18.1082 17.2429 18.1082 16.536 17.6753 16.1033L13.1988 11.6083ZM6.86412 11.6083C4.23521 11.6083 2.11309 9.48745 2.11309 6.86009C2.11309 4.23273 4.23521 2.11185 6.86412 2.11185C9.49302 2.11185 11.6151 4.23273 11.6151 6.86009C11.6151 9.48745 9.49302 11.6083 6.86412 11.6083Z"
          />
        </svg>
        <input type="search" id="search" name="search" placeholder="Поиск" />
      </div>
      <div className="profile-wrapper">
        <svg
          className="icon icon-bell"
          viewBox="0 0 23 26"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="bell"
            d="M22.6898 17.5656C21.6915 15.7685 21.1613 13.189 21.1613 10.1111C21.1613 7.42948 20.1434 4.85768 18.3316 2.96148C16.5199 1.06527 14.0625 0 11.5003 0C8.93805 0 6.48074 1.06527 4.66895 2.96148C2.85717 4.85768 1.83932 7.42948 1.83932 10.1111C1.83932 13.1902 1.31142 15.7685 0.313115 17.5656C0.109408 17.9322 0.00142718 18.3484 1.40506e-05 18.7724C-0.00139908 19.1965 0.103805 19.6135 0.305064 19.9815C0.50505 20.3497 0.795318 20.6554 1.1459 20.867C1.49648 21.0786 1.89467 21.1885 2.29937 21.1852H20.7012C21.1053 21.1878 21.5028 21.0777 21.8527 20.8661C22.2027 20.6545 22.4924 20.3492 22.6921 19.9815C22.8942 19.614 23.0004 19.1973 23 18.7732C22.9996 18.3492 22.8926 17.9327 22.6898 17.5656ZM3.06534 18.2963C4.0832 16.1296 4.5996 13.378 4.5996 10.1111C4.5996 8.19566 5.32663 6.35866 6.62077 5.00423C7.9149 3.6498 9.67012 2.88889 11.5003 2.88889C13.3305 2.88889 15.0857 3.6498 16.3798 5.00423C17.674 6.35866 18.401 8.19566 18.401 10.1111C18.401 13.3768 18.9162 16.1296 19.9341 18.2963H3.06534ZM16.5608 24.5556C16.5608 24.9386 16.4154 25.306 16.1566 25.5769C15.8977 25.8478 15.5467 26 15.1807 26H7.81992C7.45389 26 7.10284 25.8478 6.84402 25.5769C6.58519 25.306 6.43978 24.9386 6.43978 24.5556C6.43978 24.1725 6.58519 23.8051 6.84402 23.5342C7.10284 23.2633 7.45389 23.1111 7.81992 23.1111H15.1807C15.5467 23.1111 15.8977 23.2633 16.1566 23.5342C16.4154 23.8051 16.5608 24.1725 16.5608 24.5556Z"
          />
        </svg>
        {isSignedIn ? (
          ""
        ) : (
          <>
            <img
              className="_no-select"
              src="./img/users/andrey-kashirskiy.jpeg"
              alt="Profile"
            />
            <svg
              className="icon icon-arrow _active"
              viewBox="0 0 12 6"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="arrow"
                d="M6 5.99999C5.8565 5.99999 5.71731 5.97708 5.58242 5.93128C5.44753 5.88548 5.33561 5.82441 5.24664 5.74808L0.295964 1.53435C0.0986543 1.36641 0 1.15267 0 0.893127C0 0.633586 0.0986543 0.419846 0.295964 0.251907C0.493273 0.0839689 0.744394 0 1.04933 0C1.35426 0 1.60538 0.0839689 1.80269 0.251907L6 3.82442L10.1973 0.251907C10.3946 0.0839689 10.6457 0 10.9507 0C11.2556 0 11.5067 0.0839689 11.704 0.251907C11.9013 0.419846 12 0.633586 12 0.893127C12 1.15267 11.9013 1.36641 11.704 1.53435L6.75336 5.74808C6.64574 5.83968 6.52915 5.90472 6.40359 5.94319C6.27803 5.98166 6.1435 6.0006 6 5.99999Z"
              />
            </svg>
          </>
        )}
      </div>
      {isSignedIn && <UserButton />}
    </header>
  );
};
