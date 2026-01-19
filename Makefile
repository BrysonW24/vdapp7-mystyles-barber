# MyStyles Barber - Project Makefile

.PHONY: help install dev ios android build clean clean-all test lint type-check

# Colors
BLUE := \033[0;34m
GREEN := \033[0;32m
YELLOW := \033[1;33m
RED := \033[0;31m
NC := \033[0m

help:
	@echo "$(BLUE)MyStyles Barber - Command Reference$(NC)"
	@echo ""
	@echo "$(YELLOW)Development:$(NC)"
	@echo "  make install     - Install dependencies"
	@echo "  make dev         - Start Expo development server"
	@echo "  make ios         - Run on iOS Simulator"
	@echo "  make ios-sim     - Run on iOS Simulator with clear cache"
	@echo "  make android     - Run on Android Emulator"
	@echo ""
	@echo "$(YELLOW)Build & Testing:$(NC)"
	@echo "  make build-ios   - Prebuild and pod install for iOS"
	@echo "  make test        - Run Jest tests"
	@echo "  make lint        - Run ESLint"
	@echo "  make type-check  - Run TypeScript compiler check"
	@echo ""
	@echo "$(YELLOW)Maintenance:$(NC)"
	@echo "  make clean       - Remove cache and build artifacts"
	@echo "  make clean-all   - Deep clean (includes node_modules)"
	@echo ""

install:
	@echo "$(BLUE)Installing dependencies...$(NC)"
	npm install

dev:
	@echo "$(BLUE)Starting Expo development server...$(NC)"
	npm start

ios:
	@echo "$(BLUE)Running on iOS Simulator...$(NC)"
	npm run ios

ios-sim:
	@echo "$(BLUE)Running on iOS Simulator (clear cache)...$(NC)"
	npm run ios:simulator

android:
	@echo "$(BLUE)Running on Android Emulator...$(NC)"
	npm run android

build-ios:
	@echo "$(BLUE)Building iOS native project...$(NC)"
	npm run ios:build

test:
	@echo "$(BLUE)Running tests...$(NC)"
	npm test

lint:
	@echo "$(BLUE)Running linter...$(NC)"
	npm run lint

type-check:
	@echo "$(BLUE)Checking types...$(NC)"
	npm run type-check

clean:
	@echo "$(BLUE)Cleaning cache...$(NC)"
	rm -rf .expo
	rm -rf .turbo
	@echo "$(GREEN)✓ Cleaned cache$(NC)"

clean-all: clean
	@echo "$(BLUE)Nuclear clean...$(NC)"
	rm -rf node_modules
	rm -rf ios/Pods
	rm -rf ios/build
	@echo "$(GREEN)✓ Deep clean complete$(NC)"

.SILENT:
