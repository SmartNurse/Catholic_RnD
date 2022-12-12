import { Fragment, useState } from "react";

import { IFormRegister } from 'routes/Main/type';

import { Search, Delete, ContentCutSharp } from "@mui/icons-material";
import { Button, IconButton } from '@mui/material';

import MuiTextField from 'components/Form/MuiTextField';

import RowContainer from '../../components/RowContainer';
import RowContent from '../../components/RowContent';
import SectionTitle from '../../components/SectionTitle';

interface Props extends IFormRegister {
    disabled?: boolean;
}  

interface IInfos {
    [index: string]: string[] | string;
    main_code: string;
    main_title: string;
    sub_code: string[];
    sub_title: string[];
    main_doctor: string;
    sub_doctor: string;
    disinfection_nurse: string;
    circular_nurse: string;
}

const OpInfo = (props: Props) => {
    const { disabled, register } = props;

    const [infos, setInfos] = useState<IInfos>({
        main_code: "",
        main_title: "",
        sub_code: [],
        sub_title: [],
        main_doctor: "",
        sub_doctor: "",
        disinfection_nurse: "",
        circular_nurse: ""
    });
    const [subCount, setSubCount] = useState(1);

    const staffs = [
        { title: "집도의", variable: "main_doctor" },
        { title: "보조의", variable: "sub_doctor" },
        { title: "소독간호사", variable: "disinfection_nurse" },
        { title: "순환간호사", variable: "circular_nurse" },
    ];

    const onAddCode = () => {
        setSubCount(subCount+1);
    }

    const onDeleteCode = (idx: number) => {
        setInfos({
            ...infos, 
            sub_code: [...infos.sub_code.slice(0, idx), ...infos.sub_code.slice(idx+1)],
            sub_title: [...infos.sub_title.slice(0, idx), ...infos.sub_title.slice(idx+1)]
        });
        setSubCount(subCount-1);
    }
    console.log(infos);

    return (
        <>
            <SectionTitle title="수술 정보" />
            <RowContainer xs={12}>
                <RowContent title="주수술코드" titleRatio={1} childrenRatio={2}>
                    <MuiTextField
                        value={infos.main_code}
                        onChange={(e) => setInfos({...infos, main_code: e.target.value})}
                        required={false}
                        InputProps={{ endAdornment: <Search /> }}
                    />
                </RowContent>
                <RowContent title="주수술명" titleRatio={1} childrenRatio={2}>
                    <MuiTextField
                        value={infos.main_title}
                        onChange={(e) => setInfos({...infos, main_title: e.target.value})}
                        required={false}
                        InputProps={{ endAdornment: <Search /> }}
                    />
                </RowContent>
                <RowContent title="" titleRatio={1} childrenRatio={2} />
                <RowContent title="" titleRatio={1} childrenRatio={2} />

                {Array(subCount).fill(0).map((_, idx) => 
                    <Fragment key={idx}>
                        <RowContent title="부수술코드" titleRatio={1} childrenRatio={2}>
                            <MuiTextField
                                value={infos.sub_code[idx] || ""}
                                onChange={(e) => {
                                    const newInfos = {...infos};
                                    newInfos.sub_code[idx] ? newInfos.sub_code[idx] = e.target.value : newInfos.sub_code.push(e.target.value);
                                    setInfos({...newInfos});
                                    console.log(newInfos);
                                }}
                                required={false}
                                InputProps={{ endAdornment: <Search /> }}
                            />
                        </RowContent>
                        <RowContent title="부수술명" titleRatio={1} childrenRatio={2}>
                            <MuiTextField
                                value={infos.sub_title[idx] || ""}
                                onChange={(e) => {
                                    const newInfos = {...infos};
                                    newInfos.sub_title[idx] ? newInfos.sub_title[idx] = e.target.value : newInfos.sub_title.push(e.target.value);
                                    setInfos({...newInfos});
                                }}
                                required={false}
                                InputProps={{ endAdornment: <Search /> }}
                            />
                        </RowContent>
                        <RowContent title="" titleRatio={1} childrenRatio={2} />
                        <RowContent title="" titleRatio={2} childrenRatio={1}>
                            {idx === subCount - 1
                            ?
                            <Button variant="contained" size="small" onClick={onAddCode}>
                                추가
                            </Button>
                            :
                            <IconButton
                                size="small"
                                sx={{ display: disabled ? 'none' : 'block' }}
                                onClick={() => onDeleteCode(idx)}
                            >
                                <Delete />
                            </IconButton>
                            }
                        </RowContent>
                    </Fragment>
                )}

                {staffs.map(({title, variable}, _) => 
                    <RowContent key={variable} title={title} titleRatio={1} childrenRatio={2}>
                        <MuiTextField
                            value={infos[variable]}
                            onChange={(e) => {
                                const newInfos = {...infos};
                                newInfos[variable] = e.target.value;
                                setInfos({...newInfos});
                            }}
                            required={false}
                        />
                    </RowContent>
                )}
            </RowContainer>
        </>
    );
}

export default OpInfo;