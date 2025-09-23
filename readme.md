## Overview

The `VoiceAgent` library provides a set of components, hooks, and utilities for integrating AI-powered voice assistants into applications. It supports real-time messaging, audio device management, and connection handling for seamless interaction.

## Installation

To install the package, run:

```sh
npm install @rapidaai/react@latest
```

or using Yarn:

```sh
yarn add @rapidaai/react@latest
```

## Usage Example

Here's a minimal setup for initializing and using a `VoiceAgent`:

```ts 
import { VoiceAgent, ConnectionConfig, AgentConfig, Channel, InputOptions } from "@rapidaai/react";
new VoiceAgent(
    ConnectionConfig.DefaultConnectionConfig(
    ConnectionConfig.WithSDK({
        ApiKey: "{API_KEY}",
        UserId: "random-user / identified-user",
    })
    ).withConnectionCallback({
    onDisconnect: () => {
        // do what you want when finished
        console.log("disconnect");
    },
    onConnect() {
        console.log("connected");
    },
    onError() {
        console.log("error");
    },
    }),
    new AgentConfig(
    // replace this with actual agent id from rapida console
    "{AGENT_ID}",
    // you can select only Audio/ Text
    new InputOptions([Channel.Audio, Channel.Text], Channel.Text)
    )
    .addKeywords([
        "dictionary - which you want the model to speak clearly",
    ])
    .addArgument("name", "<name>")
    .addMetadata("utm_1", StringToAny("utm_X")),
    {
    onAssistantMessage: (msg) => {
        console.log("onStart: ()");
    },
    onUserMessage: (args) => {
        console.log("onComplete:");
    },
    onConfiguration: (args) => {
        console.log("onTranscript");
    },
    onInterrupt: (args) => {
        console.log("onInterrupt");
    },
    onMessage: (args) => {
        console.log("onGeneration");
    },
    }
)
```

## Available Exports

The following components, hooks, and utilities are available for import:

### Types & Configurations

- `Channel`: Defines communication channels.
- `ConnectionConfig`: Configures the connection settings for a voice agent.
- `AgentConfig`: Configures the agent settings, including parameters and keywords.

### Core

- `VoiceAgent`: The core AI voice agent instance.

### Hooks 

- `useConnectAgent`: Establishes a connection to the voice agent.
- `useAgentMessages`: Retrieves messages exchanged with the voice agent.

## License

This project is licensed under the MIT License.