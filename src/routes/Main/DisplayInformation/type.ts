import React from 'react';

import { INursingRecord } from 'apis/main/type';

import { initialNursingRecord } from '../Survey/initialStates';

export interface IDisplayNursingRecord extends INursingRecord {
  nurseName: string;
  actionButtons: React.ReactNode;
}

export type TNanda = typeof initialNursingRecord.nanda;
export type TSoapie = typeof initialNursingRecord.soapie;
export type TFocusDar = typeof initialNursingRecord.focusDar;
export type TNarrativeContent = typeof initialNursingRecord.narrativeRecord;
export type TRemarks = typeof initialNursingRecord.remarks;
