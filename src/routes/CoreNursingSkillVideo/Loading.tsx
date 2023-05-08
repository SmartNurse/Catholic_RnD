import Spinner from '../../assets/spinner.gif';

export default () => {
  return (
    <div
      style={{
        position: 'absolute',
        backgroundColor: 'red',
        marginTop: '50px',
        width: '90%',
        height: '100%',
        top: 0,
        left: 0,
        background: '#ffffffb7',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          font: "1rem' Noto Sans KR'",
          textAlign: 'center',
        }}
      >
        잠시만 기다려 주세요.
      </div>
      <img src={Spinner} alt="로딩중" width="5%" />
    </div>
  );
};
