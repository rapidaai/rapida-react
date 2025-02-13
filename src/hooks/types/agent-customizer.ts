export class VoiceAgentDesignCustomizer {
  /**
   * Can create chat from voice agent or not
   */
  private CanCreateChat: boolean;

  constructor(canCreateChat?: boolean) {
    this.CanCreateChat = canCreateChat ? canCreateChat : false;
  }
}
