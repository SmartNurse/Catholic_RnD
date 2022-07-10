import { Box, Card, Divider, Typography } from '@mui/material';

const Privacy = () => {
  const Content = ({ title, content }: { title: string; content: string }) => (
    <Typography color="#000000B2">
      <Typography
        component="span"
        variant="body2"
        sx={{ width: 105, display: 'inline-block' }}
      >
        {title}
      </Typography>
      <Typography component="span" color="#000000E5" variant="body2">
        {content}
      </Typography>
    </Typography>
  );

  return (
    <Card
      component="section"
      sx={{ display: 'flex', gap: { xs: 1.25, xl: 5 }, p: 2.5 }}
    >
      <Box display="flex" flexDirection="column" flex={1} columnGap={1.25}>
        <Content title="등록번호" content="00000000" />
        <Content title="성별" content="여" />
        <Content title="키" content="153" />
        <Content title="혈액형" content="AB" />
        <Content title="체중" content="45" />
      </Box>
      <Divider orientation="horizontal" />
      <Box display="flex" flexDirection="column" flex={1} columnGap={1.25}>
        <Content title="진료과" content="안과" />
        <Content title="병동" content="B동" />
        <Content title="병실" content="203호" />
        <Content title="담당간호사" content="{학생이름}" />
        <Content title="담당의사" content="김진철" />
      </Box>
      <Divider orientation="horizontal" />
      <Box display="flex" flexDirection="column" flex={1} columnGap={1.25}>
        <Content title="HOD" content="23" />
        <Content title="POD" content="2" />
      </Box>
      <Divider orientation="horizontal" />
      <Box display="flex" flexDirection="column" flex={1} columnGap={1.25}>
        <Content title="주진단코드" content="DN392" />
        <Content title="주진단명" content="무슨병" />
        {/* TODO select box */}
        <Content title="부진단코드" content="DN392" />
        <Content title="부진단명" content="무슨병" />
      </Box>
    </Card>
  );
};

export default Privacy;
