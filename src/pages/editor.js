
import Head from "next/head";

import dynamic from 'next/dynamic'
import { Box, Container } from "@mui/material";
import { DashboardLayout } from "../components/dashboard-layout";

const CodeEditor = dynamic(import('../components/editor/codeEditor'), {ssr: false})

const Editor = () => (
  <>
    <Head>
        <title>
          Editor | Material Kit
        </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container>
        <CodeEditor />
      </Container>
    </Box>
  </>
)

Editor.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);
export default Editor
