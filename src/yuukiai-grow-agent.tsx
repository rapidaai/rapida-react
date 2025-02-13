import { Helmet } from '@/app/components/Helmet';
import { Agent } from '@/app/pages/agents/voice-agents/agent';
import { VoiceAgent } from '@/app/pages/agents/voice-agents/hooks/types/voice-agent';
import { VoiceAgentContext } from '@/app/pages/agents/voice-agents/hooks/useVoiceAgent';
import { useCredential } from '@/hooks';
import { HEADER_AUTH_ID, HEADER_PROJECT_ID } from '@/utils/rapida_header';
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { cn } from '@/styles/media';
import { AgentLiveTranscript } from '@/app/pages/agents/voice-agents/components/live-transcript';
import { Info } from '@/app/pages/agents/voice-agents/components/info';
import { WithActionToolbar } from '@/app/components/container/with-action-toolbar';

export function YuukiaiGrowVoiceAgent() {
  const [userId, token, projectId] = useCredential();
  return (
    <WithActionToolbar
      action={<></>}
      logo={
        <div className="w-auto h-7">
          <img
            className="dark:block hidden h-full w-full"
            src="https://yuukiai.com/images/logo-with-label-svg.svg"
            alt=""
          />
          <img
            className="dark:hidden block h-full w-full"
            src="https://app.yuukiai.com/images/yuuki-logo-light-mode.svg"
            alt=""
          />
        </div>
      }
    >
      <Helmet title="Yuuki - GROW framework ai coach"></Helmet>
      <div className="h-full overflow-hidden flex flex-1 grow -my-4">
        <VoiceAgentContext.Provider
          //   value={
          //     new VoiceAgent(
          //       {
          //         authorization:
          //           '61c814ba2a3868574e53860537bb4bc03a9bd1305a822800d5f0ee0c1206ac5c',
          //         [HEADER_AUTH_ID]: '2021822161534058496',
          //         [HEADER_PROJECT_ID]: '2021822986910171136',
          //       },
          //       '2131284784364650496',
          //     )
          //   }
          value={
            new VoiceAgent(
              {
                authorization:
                  'a1302a0c3555a24b9ac713ada878cde192d888ac0ed86e752255f5b4819d57be',
                [HEADER_AUTH_ID]: '2134570627808362496',
                [HEADER_PROJECT_ID]: '2134571904994902016',
              },
              '2134574801174396928',
            )
          }
        >
          <PanelGroup direction="horizontal" className="grow flex flex-1">
            <Panel className="flex flex-1 flex-col items-stretch">
              <div className={cn('group transition-all', 'flex-1', 'p-4')}>
                <div className="relative mx-auto space-y-5 flex flex-col w-full h-full items-center justify-center text-center">
                  <Agent />
                  <AgentLiveTranscript />
                </div>
              </div>
            </Panel>
            <PanelResizeHandle className="hidden md:flex !w-[1px] bg-slate-200 dark:bg-gray-800 hover:bg-blue-700 dark:hover:bg-blue-500 items-stretch" />
            <Panel
              className="flex-col items-stretch hidden md:flex"
              defaultSize={30}
            >
              <Info
                visibilty={['chats']}
                agentIcon={
                  <img
                    src="https://app.yuukiai.com/images//logo-svg.svg"
                    className="w-8 h-8"
                    alt="yuukiai"
                  />
                }
              />
            </Panel>
          </PanelGroup>
        </VoiceAgentContext.Provider>
      </div>
    </WithActionToolbar>
  );
}
