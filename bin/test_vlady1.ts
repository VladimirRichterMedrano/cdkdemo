#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TestVlady1Stack } from '../lib/test_vlady1-stack';

const app = new cdk.App();
new TestVlady1Stack(app, 'TestVlady1Stack');
