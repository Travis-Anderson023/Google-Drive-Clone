import { useCallback, useState, useEffect } from "react";

import { Button, Input, Paper } from "@mui/material";

import { useCreateUserMutation } from "../../api/gql/generated/schema";

const CreateUserForm = () => {
  const [formState, setFormState] = useState({ name: "", password: "" });

  const [createUser, { data, loading }] = useCreateUserMutation({
    variables: {
      input: {
        name: formState.name,
        password: formState.password,
      },
    },
  });

  const handleSubmit = useCallback(async () => {
    const result = await createUser();
    if (result.data) {
      // eslint-disable-next-line no-console
      console.log(result.data.createUser);
    } else {
      // eslint-disable-next-line no-console
      console.log("no data found");
    }
  }, [formState]);

  return (
    <Paper
      elevation={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "50%",
        height: "50%",
      }}
    >
      <Input
        id="my-input"
        placeholder="name"
        value={formState.name}
        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
      />
      <Input
        id="my-input"
        placeholder="password"
        value={formState.password}
        onChange={(e) => setFormState({ ...formState, password: e.target.value })}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Create User
      </Button>
    </Paper>
  );
};

export default CreateUserForm;
