import { TextChannel } from "discord.js";

export const getMpm = (channel: TextChannel) =>
  channel.messages.cache
    .map((message) => Date.now() - message.createdTimestamp)
    .filter((ms) => ms <= 60000).length;

export const clamp = (num: number, min: number, max: number) =>
  Math.max(min, Math.min(num, max));

export const clampSlowmode = (slowmode: number) => clamp(slowmode, 0, 21600);
