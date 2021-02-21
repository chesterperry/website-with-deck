/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Heading } from "theme-ui";
import React from "react";


const Container = (props) => (
    <div
      {...props}
      sx={{
        maxWidth: 'container',
        mx: 'auto',
        px: 3,
      }}
    />
  )
  
  export const MyLayout = (props) => (
    <div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
      <header
        sx={{
          width: '100%',
          minHeight: '10vh',
          minWidth:'100vw'
        }}>
        <Container><Heading as="h3" p={3}>{props.header}</Heading>
        <Heading as="h6" p={2}>{props.subheader}</Heading>
        </Container>
      </header>
      <main
        sx={{
          width: '100%',
          flex: '1 1 auto',
        }}>
        <Container>{props.children}</Container>
      </main>
      <footer
        sx={{
          width: '100%',
          minHeight: '10vh'
        }}>
        <Container><Heading as="h3" p={3}>{props.footer}</Heading></Container>
      </footer>
    </div>
  )

  export default MyLayout;
