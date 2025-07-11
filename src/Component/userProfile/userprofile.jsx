import React from "react";
import { Card, CardContent, Box } from "@mui/material";
import { Avatar, Typography } from "@mui/material"
import { Divider, Stack, } from "@mui/material"


export default function UserProfile({ user }) {
    return (

        <Card sx={{ mb: 3, borderRadius: 3, boxShadow: 3 }}>
            <CardContent>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="center">
                    <Avatar
                        src={user.avatar_url}
                        alt={user.name || user.login}
                        sx={{
                            width: { xs: 80, sm: 100 },
                            height: { xs: 80, sm: 100 },
                            border: "2px solid rgb(81, 52, 243)",
                        }}
                    />

                    <Box flex={1}>
                        <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem" } }}>
                            {user.name || user.login}
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                            @{user.login}
                        </Typography>

                        {user.bio && (
                            <Typography variant="body2" sx={{ mb: 1 }}>
                                {user.bio}
                            </Typography>
                        )}

                        <Stack direction="row" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
                            <Typography variant="body2" color="text.secondary">
                                Followers: <strong>{user.followers}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Following: <strong>{user.following}</strong>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Repos: <strong>{user.public_repos}</strong>
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>
            </CardContent>
        </Card>

    );
}
