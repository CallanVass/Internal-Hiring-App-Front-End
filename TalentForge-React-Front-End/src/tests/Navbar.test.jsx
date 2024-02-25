import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { describe, expect, it, beforeEach } from "vitest";
import NavBar from "../components/NavBar";