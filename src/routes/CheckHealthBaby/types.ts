interface ButtonProps {
  isLoading: boolean;
  onClick: () => void;
}

export interface ISendMailProps extends ButtonProps {
  isSendMail: boolean;
}

export interface IVerifyMailProps extends ButtonProps {
  isVerification: boolean;
}
